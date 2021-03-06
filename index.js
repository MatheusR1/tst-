import express from "express";
import consign from "consign";

const PORT=3000;

const app=express();

consign()
    .include("model")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app);
