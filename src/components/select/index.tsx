"use client";
import { Select as AntSelect } from "antd";
import { BaseOptionType, DefaultOptionType } from "antd/es/select";

export const { Option, OptGroup } = AntSelect;
export const Select = AntSelect;

export const filterOption = (
  input: string,
  option?: BaseOptionType | DefaultOptionType | undefined
) => {
  return String(option?.label ?? "").toLowerCase().includes(input.toLowerCase())
};