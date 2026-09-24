import { NavLink, Outlet } from "react-router-dom"
import {
  ShieldCheck,
  LayoutDashboard,
  FileSearch,
  FolderKanban,
  Database,
  Wrench,
  BrainCircuit,
  BarChart3,
  Workflow
} from "lucide-react"

function Layout() {
  return (
    <div className="app-layout">

      {/* Sidebar */}
      <aside className="sidebar">

        {/* Brand */}
        <div className="brand">
          <div className="brand-icon">
            <ShieldCheck size={24} />
          </div>

          <div>
            <h2>FraudGuard</h2>
            <span>Insurance Intelligence</span>
          </div>
        </div>


        {/* Navigation */}
        <nav className="sidebar-nav">

          <p className="nav-label">MAIN MENU</p>

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <LayoutDashboard size={19} />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/prediction"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <FileSearch size={19} />
            <span>New Prediction</span>
          </NavLink>


          <p className="nav-label project-label">PROJECT</p>

          <NavLink
            to="/project-overview"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <FolderKanban size={19} />
            <span>Project Overview</span>
          </NavLink>

          <NavLink
            to="/dataset"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <Database size={19} />
            <span>Dataset</span>
          </NavLink>

          <NavLink
            to="/data-processing"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <Wrench size={19} />
            <span>Data Processing</span>
          </NavLink>

          <NavLink
            to="/ml-model"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <BrainCircuit size={19} />
            <span>ML Model</span>
          </NavLink>

          <NavLink
            to="/model-evaluation"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <BarChart3 size={19} />
            <span>Model Evaluation</span>
          </NavLink>

          <NavLink
            to="/how-it-works"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <Workflow size={19} />
            <span>How It Works</span>
          </NavLink>

        </nav>


        {/* Sidebar Footer */}
        <div className="sidebar-footer">

          <div className="status-dot"></div>

          <div>
            <strong>System Online</strong>
            <span>Prediction API connected</span>
          </div>

        </div>

      </aside>


      {/* Main Content */}
      <main className="main-content">
        <Outlet />
      </main>

    </div>
  )
}

export default Layout