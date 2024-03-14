"use client";

import { useRouter, useParams } from "next/navigation";
import { useQuery, useMutation } from "convex/react";

export const TrashBox = () => {
    const router = useRouter();
    const params = useParams();
    const documents = useQuery();

    return (
        <div>
            TrashBox
        </div>
    )
}