import { createFileRoute } from "@tanstack/react-router";
import ViewNote from "../pages/ViewNote";

export const Route = createFileRoute("/view/$Title")({
    component: View,
});

function View() {
    const { Title } = Route.useParams();

    return <ViewNote Title={Title} />;
}