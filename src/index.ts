import { Server } from "./Api/Server";
import express from "express";
import CONFIG from "./Config/index"

const applicacion = new Server(express(), CONFIG);

applicacion.start();