import { PrismaClient } from "@prisma/client";
import { projects } from "../src/data/projects";

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < projects.length; i++) {
    const p = projects[i];
    await prisma.project.upsert({
      where: { slug: p.slug },
      update: {},
      create: {
        slug: p.slug,
        index: p.index,
        title: p.title,
        eyebrow: p.eyebrow,
        summary: p.summary,
        description: p.description,
        role: p.role,
        scope: p.scope,
        tech: p.tech,
        challenge: p.challenge,
        solution: p.solution,
        decisions: p.decisions,
        outcomes: p.outcomes,
        accent: p.accent,
        image: p.image,
        imageAlt: p.imageAlt,
        liveUrl: p.liveUrl,
        githubUrl: p.githubUrl,
        sortOrder: i + 1,
        published: true,
      },
    });
  }
  console.log(`✅ ${projects.length} projects seeded successfully.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });