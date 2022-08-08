import { GetStaticProps, NextPage } from "next";
import React from "react";
import { Categories, Category, CategoryAttributes } from "../../cms";
import { API_PATHS, fetchApiByPath } from "../../utils/api";
import styles from './Navigation.module.css';


interface NavgiationProps {
  categories: CategoryAttributes[];
}

const Navigation : NextPage<NavgiationProps> = ({categories}) => {
console.log(categories)
  return (
    <nav className={styles.container}>
      {/* <a href="/">{'Title'}</a>
      {categories.map((category, key) => {
        return <a href={category.slug} key={key}>{category.Category}</a>
      })} */}
    </nav>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  // const categories = await fetchApiByPath<Categories>(API_PATHS.CATEGORIES).then((data: Categories) => data.data.map((category: Category) => category.attributes));
  const categoxxries = await fetchApiByPath<Categories>(API_PATHS.CATEGORIES).then((data: Categories) => data.data.map((category: Category) => category.attributes));
  const categories: CategoryAttributes[] = []

  return {props: {
    categories: categoxxries,
  }}
}

export default Navigation;