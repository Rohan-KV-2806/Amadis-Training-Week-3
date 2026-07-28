import { createFileRoute } from "@tanstack/react-router";
import AddNote from "../pages/AddNote";

export const Route = createFileRoute("/add")({
    component: AddNote,
});