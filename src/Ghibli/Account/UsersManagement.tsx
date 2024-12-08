import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PeopleTable from "../Movies/People/Table";
import * as client from "./client";
import { FaPlus } from "react-icons/fa";
import AdminPeopleDetails from "../Movies/People/AdminDetails";
import AdminPeopleTable from "../Movies/People/AdminPeopleTable";
export default function UsersManagement() {
    const [users, setUsers] = useState<any[]>([]);
    const { uid } = useParams();
    const [role, setRole] = useState("");
    const [name, setName] = useState("");
    const createUser = async () => {
        const user = await client.createUser({
            firstName: "New",
            lastName: `User${users.length + 1}`,
            username: `newuser${Date.now()}`,
            password: "password123",
            email: `email${users.length + 1}@neu.edu`,
            section: "S101",
            role: "USER",
        });
        setUsers([...users, user]);
    };

    const filterUsersByName = async (name: string) => {
        setName(name);
        if (name) {
            const users = await client.findUsersByPartialName(name);
            setUsers(users);
        } else {
            fetchUsers();
        }
    };

    const filterUsersByRole = async (role: string) => {
        setRole(role);
        if (role) {
            const users = await client.findUsersByRole(role);
            setUsers(users);
        } else {
            fetchUsers();
        }
    };

    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };
    useEffect(() => {
        fetchUsers();
    }, [uid]);
    return (
        <div>
            <button onClick={createUser} className="float-end btn btn-danger wd-add-people">
                <FaPlus className="me-2" />
                User
            </button>
            <h3>Users</h3>
            <input onChange={(e) => filterUsersByName(e.target.value)} placeholder="Search people"
                className="form-control float-start w-25 me-2 wd-filter-by-name" />
            <select value={role} onChange={(e) => filterUsersByRole(e.target.value)}
                className="form-select float-start w-25 wd-select-role" >
                <option value="">All Roles</option>    <option value="USER">User</option>

                <option value="ADMIN">Administrators</option>
            </select>
            <AdminPeopleTable users={users} />
        </div>
    );
}
