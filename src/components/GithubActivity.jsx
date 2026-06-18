import { GitHubCalendar } from "react-github-calendar";

export default function GithubActivity() {
  return (
    <section className="py-32" id="github">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-16">
          GitHub Activity
        </h2>

        <div className="glass p-8 rounded-[40px] overflow-auto">
          <GitHubCalendar username="Mohammadaminml" />
        </div>
      </div>
    </section>
  );
}