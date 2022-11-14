import React from "react"

type TRoute = {
    path: string,
    Component: React.FC
}

export type TRoutes = Array<TRoute>