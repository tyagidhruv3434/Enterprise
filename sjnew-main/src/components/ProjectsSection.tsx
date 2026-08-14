import React, { useState } from 'react';
import { PROJECTS } from '../data/companyData';
import { Project } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';
import { ChevronRight, CheckCircle2, Tag, ShieldCheck } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenQuoteModal: (projectContext?: string) => void;
  onOpenLightbox: (imageUrl: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenQuoteModal,
  onOpenLightbox,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'vessels', label: 'Pressure Vessels' },
    { id: 'boilers', label: 'Boilers & Heat Exchangers' },
    { id: 'fabrication', label: 'Heavy Fabrication' },
    { id: 'machining', label: 'VTL & Machining' },
    { id: 'supply', label: 'Material Supply & Specialized' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.categorySlug === selectedCategory || p.category.toLowerCase().includes(selectedCategory));

  return (
    <section id="projects" className="py-20 bg-white font-sans border-b border-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-300 px-3 py-1 rounded-full text-orange-700 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-orange-600" />
            <span>Engineering Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-serif tracking-tight">
            Featured Projects & Industrial Executions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A comprehensive directory of major engineering projects executed by SJ Sharda Enterprises — high-specification pressure vessels, boilers, gas pipeline spools, heavy VTL machining jobs, and certified steel material supplies.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-slate-950 text-white font-bold shadow-md scale-105 border border-slate-800'
                  : 'bg-white border border-slate-200 text-slate-700 hover:text-black hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects List Grid (No embedded images, pure names and specification details) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-orange-500 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-md hover:shadow-xl relative"
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <span className="bg-orange-50 text-orange-700 border border-orange-200 text-[11px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Project Name */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-950 font-serif group-hover:text-orange-600 transition leading-snug">
                    {project.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technical Highlights */}
                <div className="space-y-1.5 border-t border-slate-100 pt-3 text-[11px] text-slate-600">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block mb-1">
                    Key Highlights:
                  </span>
                  {project.engineeringHighlights.slice(0, 3).map((hl, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700 line-clamp-1">{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Material Grade Badge */}
                {project.materialsUsed && (
                  <div className="text-[11px] text-slate-600 bg-slate-100/80 p-2 rounded-lg flex items-center gap-1.5 border border-slate-200">
                    <Tag className="w-3 h-3 text-orange-600 shrink-0" />
                    <span className="truncate"><strong>Material:</strong> {project.materialsUsed}</span>
                  </div>
                )}
              </div>

              {/* Card Actions */}
              <div className="pt-5 mt-4 flex items-center gap-2 border-t border-slate-100">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 hover:text-black py-2.5 rounded-xl text-xs font-bold border border-slate-200 flex items-center justify-center gap-1.5 transition cursor-pointer"
                >
                  <span>View Specifications</span>
                  <ChevronRight className="w-3.5 h-3.5 text-orange-600" />
                </button>
                <button
                  onClick={() => onOpenQuoteModal(`Inquiry about project: ${project.name}`)}
                  className="bg-slate-950 hover:bg-slate-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider transition cursor-pointer border border-slate-800"
                >
                  Inquire
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Specs Detail Modal */}
      <ProjectDetailModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onOpenQuoteModal={onOpenQuoteModal}
        onOpenLightbox={onOpenLightbox}
      />
    </section>
  );
};
