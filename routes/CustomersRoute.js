import Customers from "../model/CustomerModel.js";
import express from "express";

const CustomersRoute = express.Router();

CustomersRoute.get("/", async (request, response) => {
    try {
        const customers = await Customers.find();
        if (!Customers) {
            return response.status(404).json(customers);
        }
        response.status(200).json(customers);
    } catch (error) {
        response.status(400).json({ err: error });
    }
});

CustomersRoute.post("/", async (request, response) => {
    const { username, email, password, gender, phone, address } = request.body;
    try {
        const addNewAccount = await Customers.create({
            username,
            email,
            password,
            gender,
            phone,
            address,
        });
        response.status(200).json(addNewAccount);
    } catch (error) {
        response.status(400).json({ err: error });
    }
});

export default CustomersRoute;