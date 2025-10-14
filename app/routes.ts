import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("./components/layout.tsx", [
    index("routes/index.tsx"),
    route("character/:id", "routes/character.tsx"),
  ]),
] satisfies RouteConfig;
