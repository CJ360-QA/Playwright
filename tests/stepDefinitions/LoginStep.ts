import { Given, When, Then, Before,After,AfterAll,BeforeAll } from "@cucumber/cucumber";
import type { Page } from "@playwright/test";
import { expect,request,test } from "@playwright/test";

Given('user is on login page {string}', {timeout:3000}, async function (keyword:string) {
    
});