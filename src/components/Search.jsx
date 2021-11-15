import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export function Search() {
    const query = useQuery();
    const search = query.get("search");

  // Utilizo un hook para hacer el cambio de PATH
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Title"
          aria-label="Search Movies"
          value={search}
          onChange={(e) => {
              const value = e.target.value;
              history("/?search=" + value);
          }}
        />
          <FaSearch color="black" size={20} className={styles.searchButton} />
      </div>
    </form>
  );
}
