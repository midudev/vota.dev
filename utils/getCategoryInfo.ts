import { LIST_SVG_ICONS } from '../constants'
import type { CategoriesInterface } from '../types/category'

export const getCategoryInfo = ({ categories }: CategoriesInterface) => {
  const categoriesInfo = [
    {
      title: categories.UI_TITLE,
      options: LIST_SVG_ICONS.UI_LIBRARY_LIST,
    },
    {
      title: categories.BACKEND_TITLE,
      options: LIST_SVG_ICONS.BACKEND_LIST,
    },
    {
      title: categories.CSS_TITLE,
      options: null,
    },
    {
      title: categories.FULL_STACK_TITLE,
      options: LIST_SVG_ICONS.FULL_STACK_LIST,
    },
    {
      title: categories.PACKAGE_TITLE,
      options: LIST_SVG_ICONS.PACKAGE_LIST,
    },
    {
      title: categories.ENV_TITLE,
      options: LIST_SVG_ICONS.ENVAIROMENT_LIST,
    },
    {
      title: categories.CSS_IN_JS_TITLE,
      options: LIST_SVG_ICONS.CSS_IN_JS_LIST,
    },
    {
      title: categories.FRAMEWORK_CSS_TITLE,
      options: LIST_SVG_ICONS.FRAMEWORK_CSS_LIST,
    },
    {
      title: categories.TOOL_TESTING_TITLE,
      options: LIST_SVG_ICONS.TOOL_TESTING_LIST,
    },
    {
      title: categories.E2S_TITLE,
      options: LIST_SVG_ICONS.E2S_LIST,
    },
    {
      title: categories.SERVICE_TITLE,
      options: LIST_SVG_ICONS.SERVICE_LIST,
    },
    {
      title: categories.CATALOG_TITLE,
      options: LIST_SVG_ICONS.CATALOG_LIST,
    },
    {
      title: categories.HOSTING_TITLE,
      options: LIST_SVG_ICONS.HOSTING_LIST,
    },
  ]

  return {
    categoriesInfo,
  }
}
