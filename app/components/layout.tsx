import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        {/* Portal effect */}
        <div className="mb-12 relative">
          <div className="w-64 h-64 rounded-full bg-primary/20 blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 portal-spin" />
          <div
            className="w-48 h-48 rounded-full bg-secondary/30 blur-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 portal-spin"
            style={{ animationDelay: "0.5s" }}
          />
        </div>

        <div className="text-center space-y-6 relative float mb-12">
          <h1 className="text-6xl md:text-8xl font-bold text-balance">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Rick & Morty
            </span>
          </h1>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
