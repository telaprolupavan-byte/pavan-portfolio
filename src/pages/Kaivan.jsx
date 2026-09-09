import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Kaivan() {
  const navigate = useNavigate();

  return (
    <div className="case-study">
      <nav className="case-nav">
        <button onClick={() => navigate("/")}>
          <ArrowLeft size={16} />
          BACK TO PORTFOLIO
        </button>

        <span>KAIVAN / 01</span>
      </nav>

      <main>
        <section className="case-hero">
          <div className="label">01 / FEATURED PROJECT</div>

          <small>FULL-STACK BUSINESS PLATFORM</small>

          <h1>
            KAI<span>VAN.</span>
          </h1>

          <p>
            A full-stack business platform designed around real
            operational workflows, authentication, APIs and
            structured data management.
          </p>
        </section>

        <section className="case-section">
          <div className="label">02 / OVERVIEW</div>

          <div className="case-grid">
            <h2>
              BUILT FOR
              <br />
              <span>REAL WORK.</span>
            </h2>

            <div>
              <p>
                KAIVAN is being developed as a practical business
                platform with a focus on clean architecture and
                reliable backend services.
              </p>

              <p>
                The system separates business logic, API
                responsibilities and persistence so that the
                application can evolve without becoming difficult
                to maintain.
              </p>
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="label">03 / TECHNOLOGY</div>

          <div className="case-tech-grid">
            <div>
              <span>LANGUAGE</span>
              <h3>JAVA</h3>
            </div>

            <div>
              <span>BACKEND</span>
              <h3>SPRING BOOT</h3>
            </div>

            <div>
              <span>DATABASE</span>
              <h3>MONGODB</h3>
            </div>

            <div>
              <span>API</span>
              <h3>REST</h3>
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="label">04 / ARCHITECTURE</div>

          <div className="architecture large">
            <div>CLIENT</div>
            <span>→</span>
            <div>REST API</div>
            <span>→</span>
            <div>SPRING BOOT</div>
            <span>→</span>
            <div>MONGODB</div>
          </div>
        </section>

        <section className="case-section">
          <div className="label">05 / ENGINEERING FOCUS</div>

          <div className="focus-list">
            <div>
              <span>01</span>
              <h3>AUTHENTICATION</h3>
              <p>
                Secure access and application-level authentication
                supporting protected business workflows.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>BUSINESS LOGIC</h3>
              <p>
                Backend services organized around clear business
                responsibilities rather than tightly coupled code.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>DATA MANAGEMENT</h3>
              <p>
                Structured persistence and API operations designed
                for maintainability and future expansion.
              </p>
            </div>
          </div>
        </section>

        <section className="case-final">
          <div className="label">06 / PROJECT</div>

          <h2>
            FROM IDEA
            <br />
            TO <span>PLATFORM.</span>
          </h2>

          <button onClick={() => navigate("/")}>
            RETURN TO PORTFOLIO
            <ArrowUpRight size={16} />
          </button>
        </section>
      </main>
    </div>
  );
}

export default Kaivan;
