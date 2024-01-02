import { Link } from "react-router-dom";
import {
  ActionButton,
  Button,
  Search,
  StyledDataCell,
  StyledHeader,
  StyledTable,
  NavbarDropdownContent,
  NavbarDropdown,
  Pagination,
} from "./account-list.styles";
import { useEffect, useState } from "react";
import {
  accountUpdateCurrentPage,
  deleteAccount,
  fetchAccountList,
} from "../../../redux/accounts/accounts.slice";
import { useDispatch, useSelector } from "react-redux";
import { generatePagination } from "../../../components/pagination/pagination.function";

const AccountList = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { accounts, numberOfPage, currentPage } = useSelector(
    (state) => state.accounts
  );
  const handleChangePagination = (page) => {
    dispatch(accountUpdateCurrentPage(page));
  };
  const pages = generatePagination(
    numberOfPage,
    currentPage,
    handleChangePagination
  );

  useEffect(() => {
    dispatch(fetchAccountList({ search, currentPage }));
  }, [search, dispatch, currentPage]);

  return (
    <>
      <h1>List of Users</h1>
      <Search
        type="text"
        name="search"
        placeholder="Search.."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      ></Search>
      <Link to={"/admin/user"}>
        <Button>+ CREATE NEW USER</Button>
      </Link>
      <StyledTable>
        <thead>
          <tr>
            <StyledHeader>Full name</StyledHeader>
            <StyledHeader>Email</StyledHeader>
            <StyledHeader>Role</StyledHeader>
            <StyledHeader></StyledHeader>
          </tr>
        </thead>

        <tbody>
          {accounts.map((val, key) => {
            return (
              <tr key={val.id}>
                <StyledDataCell>{val.name}</StyledDataCell>
                <StyledDataCell>{val.email}</StyledDataCell>
                <StyledDataCell>{val.accountType}</StyledDataCell>
                <StyledDataCell>
                  <NavbarDropdown>
                    <ActionButton>Actions</ActionButton>
                    <NavbarDropdownContent>
                      <Link to={`/admin/user/${val.id}`}>Edit</Link> <br />
                      <Link to={`/admin/user/reset-password/${val.id}`}>
                        Reset Password
                      </Link>{" "}
                      <br />
                      <Link
                        to={`#`}
                        onClick={() => {
                          if (
                            window.confirm(
                              `Confirm delete account of user ${val.name}?`
                            )
                          ) {
                            dispatch(deleteAccount(val.id));
                          }
                        }}
                      >
                        Remove
                      </Link>
                    </NavbarDropdownContent>
                  </NavbarDropdown>
                </StyledDataCell>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>

      <Pagination>
        {pages.map((val, key) => {
          return <>{val}</>;
        })}
      </Pagination>
    </>
  );
};
export default AccountList;
