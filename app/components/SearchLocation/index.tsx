'use client'
import React, {createContext, useState, useContext} from "react";
import {Input} from "antd";
import { SearchLocationContext } from "@/app/context/search-location";


export default function SearchLocation(){
    const {setQuery, query} = useContext(SearchLocationContext);


    function onSearch (value: string) : void{
        setQuery(value)
    }

    return (
        <Input.Search placeholder="input search text" onSearch={onSearch} enterButton />
    )
}