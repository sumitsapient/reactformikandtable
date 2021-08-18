import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { NonCisco } from "./components/NonCisco";
import { YouTubeForm } from "./components/codevolution/YouTubeForm";
import { FormikContainer } from "./components/finalformik/FormikContainer";
import { LoginForm } from "./components/finalformik/practical/LoginForm";
import { RegistrationForm } from "./components/finalformik/practical/RegistrationForm";
import { CourseEnrollment } from "./components/finalformik/practical/CourseEnrollment";
import { BasicTable } from "./components/react-table/BasicTable";
import { SortingTable } from "./components/react-table/SortingTable";
import { FilteringTable } from "./components/react-table/FilteringTable";
import { PaginationTable } from "./components/react-table/PaginationTable";
import { RowSelection } from "./components/react-table/RowSelection";
import { ColumnOrder } from "./components/react-table/ColumnOrder";
import { SpringAPITest } from "./components/checkspringapi/SpringAPITest";

ReactDOM.render(<SpringAPITest />, document.getElementById("root"));
