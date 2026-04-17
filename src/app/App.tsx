import { Book, Target, Sword, Bomb } from 'lucide-react';
import { AIDocSection } from './components/AIDocSection';
import ReactDom from 'react-dom/client';
import '../styles/index.css';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 p-3 rounded-lg">
              <Book className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Manuel Technique des IA</h1>
              <p className="text-slate-600 mt-1">Documentation des comportements et mécaniques</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Introduction */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
          <p className="text-slate-700 leading-relaxed">
            Ce manuel présente les trois types d'intelligences artificielles (IA) présentes dans le jeu. 
            Chaque IA possède un comportement unique qui dicte ses actions en fonction de la position et 
            de la proximité du joueur.
          </p>
        </section>

        {/* Table des matières */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Table des matières</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="#archer" className="flex items-center gap-3 p-4 rounded-lg border-2 border-slate-200 hover:border-green-500 hover:bg-green-50 transition-all">
              <Target className="w-6 h-6 text-green-600" />
              <div>
                <div className="font-semibold text-slate-900">1. L'Archer</div>
                <div className="text-sm text-slate-600">Attaque à distance</div>
              </div>
            </a>
            <a href="#chevalier" className="flex items-center gap-3 p-4 rounded-lg border-2 border-slate-200 hover:border-red-500 hover:bg-red-50 transition-all">
              <Sword className="w-6 h-6 text-red-600" />
              <div>
                <div className="font-semibold text-slate-900">2. Le Chevalier</div>
                <div className="text-sm text-slate-600">Combat rapproché</div>
              </div>
            </a>
            <a href="#mouton" className="flex items-center gap-3 p-4 rounded-lg border-2 border-slate-200 hover:border-orange-500 hover:bg-orange-50 transition-all">
              <Bomb className="w-6 h-6 text-orange-600" />
              <div>
                <div className="font-semibold text-slate-900">3. Le Mouton Kamikaze</div>
                <div className="text-sm text-slate-600">Attaque suicide</div>
              </div>
            </a>
          </div>
        </section>

        {/* IA Sections */}
        <AIDocSection
          id="archer"
          title="L'Archer"
          icon={<Target className="w-8 h-8 text-white" />}
          iconBgColor="bg-green-600"
          description="L'Archer est une unité de combat à distance qui maintient une distance optimale avec le joueur pour maximiser son efficacité au tir."
          behaviors={[
            {
              title: "Détection du joueur",
              description: "L'Archer analyse constamment la distance qui le sépare du joueur pour adapter son comportement."
            },
            {
              title: "Tir de flèches",
              description: "Lorsque le joueur est à portée de tir (distance moyenne), l'Archer déclenche son attaque en tirant des flèches."
            },
            {
              title: "Maintien de distance",
              description: "Si le joueur s'approche trop près, l'Archer cesse de marcher."
            },
            {
              title: "Repositionnement",
              description: "Lorsque le joueur est trop éloigné, l'Archer se déplace pour se rapprocher jusqu'à atteindre sa portée de tir optimale."
            }
          ]}
          characteristics={[
            { label: "Portée de tir", value: "Moyenne" },
            { label: "Mobilité", value: "Modérée" },
            { label: "Type d'attaque", value: "À distance" },
            { label: "Stratégie", value: "Défensive" }
          ]}
        />

        <AIDocSection
          id="chevalier"
          title="Le Chevalier"
          icon={<Sword className="w-8 h-8 text-white" />}
          iconBgColor="bg-red-600"
          description="Le Chevalier est une unité offensive agressive qui poursuit le joueur sans relâche et engage le combat au corps à corps."
          behaviors={[
            {
              title: "Poursuite active",
              description: "Le Chevalier court constamment en direction du joueur, réduisant rapidement la distance qui les sépare."
            },
            {
              title: "Attaque au corps à corps",
              description: "Dès que le joueur est à portée d'attaque rapprochée, le Chevalier lance une série d'attaques de mêlée."
            },
            {
              title: "Persistance",
              description: "Contrairement à l'Archer, le Chevalier ne maintient pas de distance et recherche toujours le contact direct."
            },
            {
              title: "Vitesse de déplacement",
              description: "Le Chevalier se déplace à une vitesse élevée, rendant difficile la fuite pour le joueur."
            }
          ]}
          characteristics={[
            { label: "Portée d'attaque", value: "Courte" },
            { label: "Mobilité", value: "Élevée" },
            { label: "Type d'attaque", value: "Mêlée" },
            { label: "Stratégie", value: "Offensive" }
          ]}
        />

        <AIDocSection
          id="mouton"
          title="Le Mouton Kamikaze"
          icon={<Bomb className="w-8 h-8 text-white" />}
          iconBgColor="bg-orange-600"
          description="Le Mouton Kamikaze est une menace unique qui sacrifie sa vie dans une explosion dévastatrice précédée d'un chant caractéristique."
          behaviors={[
            {
              title: "Approche déterminée",
              description: "Le Mouton se dirige vers le joueur avec détermination, ignorant tout danger."
            },
            {
              title: "Déclenchement du chant",
              description: "Une fois à proximité du joueur, le Mouton commence à chanter sa chanson caractéristique."
            },
            {
              title: "Séquence irréversible",
              description: "⚠️ IMPORTANT : Une fois le chant commencé, l'explosion est inévitable. Le Mouton ne peut plus être interrompu."
            },
            {
              title: "Explosion finale",
              description: "À la fin de la chanson, le Mouton explose, causant des dégâts dans une zone autour de lui."
            }
          ]}
          characteristics={[
            { label: "Rayon d'explosion", value: "Élevé" },
            { label: "Mobilité", value: "Modérée" },
            { label: "Type d'attaque", value: "Zone d'effet" },
            { label: "Stratégie", value: "Suicide" }
          ]}
          warningNote="Une fois le chant commencé, la séquence d'explosion ne peut pas être annulée. Le joueur doit s'éloigner immédiatement pour éviter les dégâts."
        />

        {/* Conclusion */}
        <section className="bg-white rounded-xl shadow-md p-8 mt-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Conclusion</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Chaque IA apporte une dynamique de jeu unique nécessitant des stratégies différentes de la part du joueur :
          </p>
          <ul className="space-y-2 text-slate-700 ml-6">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">•</span>
              <span><strong>L'Archer</strong> requiert un combat à moyenne distance et des mouvements tactiques.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 mt-1">•</span>
              <span><strong>Le Chevalier</strong> demande une stratégie d'évitement et de timing précis.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-600 mt-1">•</span>
              <span><strong>Le Mouton Kamikaze</strong> impose une réaction rapide dès le début du chant.</span>
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 text-slate-500 text-sm">
          <p>Manuel Technique des IA - Version 1.0</p>
        </footer>
      </main>
    </div>
  );
}

ReactDom.createRoot(document.getElementById('root')!).render(<App />)