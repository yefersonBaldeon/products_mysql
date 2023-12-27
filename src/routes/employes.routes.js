import express from "express";
import { getEmployee,getOneEmployee,createEmployee, updareEmployees,deleteEmployee} from "../controllers/employee.controller.js";

const router = express.Router();

router.get("/", getEmployee);

router.get("/:id", getOneEmployee);

router.post("/", createEmployee);

router.put("/:id", updareEmployees);

router.delete("/:id", deleteEmployee);

export default router;
