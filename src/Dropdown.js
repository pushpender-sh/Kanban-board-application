import React from "react";
import { useAuth } from "./context";

export default function Dropdown() {
  const { data, groupBy, setGroupBy, orderBy, setOrderBy } = useAuth();
  return (
    <div className="dropdown">
      <div className="dropdown-row">
        <div>Grouping</div>
        <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div className="dropdown-row">
        <div>Ordering</div>
        <select value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
}
