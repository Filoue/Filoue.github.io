import { AlertCircle } from 'lucide-react';

interface Behavior {
  title: string;
  description: string;
}

interface Characteristic {
  label: string;
  value: string;
}

interface AIDocSectionProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  iconBgColor: string;
  description: string;
  behaviors: Behavior[];
  characteristics: Characteristic[];
  warningNote?: string;
}

export function AIDocSection({
  id,
  title,
  icon,
  iconBgColor,
  description,
  behaviors,
  characteristics,
  warningNote
}: AIDocSectionProps) {
  return (
    <section id={id} className="bg-white rounded-xl shadow-md p-8 mb-8 scroll-mt-8">
      {/* Title */}
      <div className="flex items-center gap-4 mb-6">
        <div className={`${iconBgColor} p-3 rounded-lg`}>
          {icon}
        </div>
        <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
      </div>

      {/* Description */}
      <p className="text-slate-700 leading-relaxed mb-8 text-lg">
        {description}
      </p>

      {/* Warning Note */}
      {warningNote && (
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-8 rounded-r-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-orange-900 mb-1">Attention</p>
              <p className="text-orange-800">{warningNote}</p>
            </div>
          </div>
        </div>
      )}

      {/* Behaviors */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-slate-900 mb-4">Comportements</h3>
        <div className="space-y-4">
          {behaviors.map((behavior, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-semibold">
                {index + 1}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900 mb-1">{behavior.title}</h4>
                <p className="text-slate-600">{behavior.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Characteristics */}
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-4">Caractéristiques</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {characteristics.map((char, index) => (
            <div key={index} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="text-sm text-slate-600 mb-1">{char.label}</div>
              <div className="font-semibold text-slate-900">{char.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}