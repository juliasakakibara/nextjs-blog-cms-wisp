import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Me

![Julia](./images/euzinha.webp)

UX Engineer, mas não se preocupe: já estou me tratando com arte, terra e um pouco de tinta natural.
Misturo biotecnologia com barro, sensor com pigmento e teoria com prática (quando dá).

Criei esse espaço pra compartilhar minhas experiências com tintas feitas de terra, ideias que ainda não viraram nada e projetos que talvez nunca fiquem prontos.
Gosto de tecnologia, mas também gosto quando as coisas falham e a gente precisa improvisar.

Se você está procurando um caminho linear, receitas prontas ou promessas de sucesso… talvez essa não seja a página certa.
Mas se curte experimentar, se sujar, rir do absurdo e fazer do erro um material de trabalho — então sinta-se em casa.`;

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "More about Julia Sakakibara and her work",
    openGraph: {
      title: "About Me",
      description: "More about Julia Sakakibara and her work",
      images: [
        signOgImageUrl({
          title: "Julia Sakakibara",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <>
      <Header />
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-20 pt-32 sm:pt-36 lg:pt-40">
        <div className="container mx-auto">
          <div className="prose lg:prose-lg dark:prose-invert m-auto blog-content">
            <Markdown>{content}</Markdown>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
