import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const email = "2223483@slu.edu.ph";
const github = "https://github.com/duanechan";

function App() {
  return (
    <section className="flex flex-col gap-8 m-8">
      <div>
        <h1 className="mb-4 text-6xl font-bold text-gray-800">
          Under Construction
        </h1>
        <span className="text-xl font-inter">I'm working on it. 🛏️💤</span>
      </div>
      <div className="flex gap-3">
        <a
          href={github}
          className="transition-all duration-200 ease-in-out text-gray-800 hover:text-gray-900 hover:-translate-y-0.5"
        >
          <FontAwesomeIcon size="xl" icon={faGithub} />
        </a>
        <a
          href={`mailto:${email}?subject=Inquiry from Portfolio`}
          className="transition-all duration-200 ease-in-out text-gray-800 hover:text-gray-900 hover:-translate-y-0.5"
        >
          <FontAwesomeIcon size="xl" icon={faEnvelope} />
        </a>
      </div>
    </section>
  );
}

export default App;
