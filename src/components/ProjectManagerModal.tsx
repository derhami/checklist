import React, { useState } from 'react';
import { X, FolderPlus, Trash2, CheckCircle2, Edit3, Briefcase } from 'lucide-react';
import { Project } from '../types';

interface ProjectManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  activeProjectId: string;
  onSelectProject: (id: string) => void;
  onCreateProject: (name: string, clientOrTeam?: string, description?: string) => void;
  onUpdateProject: (id: string, updates: Partial<Pick<Project, 'name' | 'clientOrTeam' | 'description'>>) => void;
  onDeleteProject: (id: string) => void;
}

export const ProjectManagerModal: React.FC<ProjectManagerModalProps> = ({
  isOpen,
  onClose,
  projects,
  activeProjectId,
  onSelectProject,
  onCreateProject,
  onUpdateProject,
  onDeleteProject,
}) => {
  const [isCreating, setIsCreating] = useState(false);
  const [newName, setNewName] = useState('');
  const [newTeam, setNewTeam] = useState('');
  const [newDesc, setNewDesc] = useState('');

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [editTeam, setEditTeam] = useState('');

  if (!isOpen) return null;

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;
    onCreateProject(newName, newTeam, newDesc);
    setNewName('');
    setNewTeam('');
    setNewDesc('');
    setIsCreating(false);
  };

  const handleStartEdit = (proj: Project) => {
    setEditingId(proj.id);
    setEditName(proj.name);
    setEditTeam(proj.clientOrTeam || '');
  };

  const handleSaveEdit = (id: string) => {
    if (editName.trim()) {
      onUpdateProject(id, { name: editName.trim(), clientOrTeam: editTeam.trim() });
    }
    setEditingId(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl max-w-xl w-full p-6 space-y-6 shadow-2xl relative overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 flex items-center justify-center font-bold">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                مدیریت پروژه‌ها (Multi-Project)
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                ذخیره‌سازی تفکیک‌شده پیشرفت چک‌لیست‌ها برای هر پروژه
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Bar */}
        {!isCreating && (
          <div className="flex items-center justify-between shrink-0">
            <span className="text-xs font-bold text-stone-500 dark:text-stone-400">
              لیست پروژه‌های فعال ({projects.length})
            </span>
            <button
              onClick={() => setIsCreating(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 text-xs font-bold transition-all shadow-sm"
            >
              <FolderPlus className="w-4 h-4" />
              <span>تعریف پروژه جدید</span>
            </button>
          </div>
        )}

        {/* Create Project Form */}
        {isCreating && (
          <form onSubmit={handleCreateSubmit} className="bg-stone-50 dark:bg-stone-950 p-4 rounded-2xl border border-stone-200 dark:border-stone-800 space-y-3 shrink-0">
            <h3 className="text-xs font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <FolderPlus className="w-4 h-4 text-amber-500" />
              <span>ایجاد پروژه ارزیابی جدید</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                type="text"
                required
                placeholder="نام پروژه (مثلاً: ریدیزاین اسنپ)"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-900 dark:text-stone-100 outline-none focus:ring-2 focus:ring-amber-500/50"
              />
              <input
                type="text"
                placeholder="نام کارفرما / تیم (اختیاری)"
                value={newTeam}
                onChange={(e) => setNewTeam(e.target.value)}
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-900 dark:text-stone-100 outline-none focus:ring-2 focus:ring-amber-500/50"
              />
            </div>
            <textarea
              placeholder="توضیحات کوتاه پروژه (اختیاری)"
              rows={2}
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
              className="w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-2.5 text-xs text-stone-900 dark:text-stone-100 outline-none focus:ring-2 focus:ring-amber-500/50"
            />
            <div className="flex justify-end gap-2 pt-1">
              <button
                type="button"
                onClick={() => setIsCreating(false)}
                className="px-3 py-1.5 rounded-xl text-xs text-stone-500 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
              >
                انصراف
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs hover:bg-amber-600 transition-colors"
              >
                ذخیره پروژه
              </button>
            </div>
          </form>
        )}

        {/* Project List */}
        <div className="flex-1 overflow-y-auto space-y-2.5 pr-1">
          {projects.map((proj) => {
            const isActive = proj.id === activeProjectId;
            const isEditing = editingId === proj.id;

            return (
              <div
                key={proj.id}
                className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  isActive
                    ? 'bg-amber-50/60 dark:bg-amber-950/30 border-amber-300 dark:border-amber-800/80 shadow-sm'
                    : 'bg-stone-50 dark:bg-stone-950/60 border-stone-200/80 dark:border-stone-800/80 hover:border-stone-300 dark:hover:border-stone-700'
                }`}
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div
                    onClick={() => onSelectProject(proj.id)}
                    className="cursor-pointer pt-0.5"
                  >
                    <CheckCircle2
                      className={`w-5 h-5 ${
                        isActive
                          ? 'text-amber-500 fill-amber-500/20'
                          : 'text-stone-300 dark:text-stone-700'
                      }`}
                    />
                  </div>

                  {isEditing ? (
                    <div className="space-y-2 flex-1">
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="w-full bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-lg px-2 py-1 text-xs font-bold"
                      />
                      <input
                        type="text"
                        value={editTeam}
                        onChange={(e) => setEditTeam(e.target.value)}
                        className="w-full bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-lg px-2 py-1 text-[11px]"
                      />
                      <button
                        onClick={() => handleSaveEdit(proj.id)}
                        className="px-2.5 py-1 bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 rounded-md text-[10px] font-bold"
                      >
                        ذخیره تغییرات
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => onSelectProject(proj.id)}
                      className="cursor-pointer min-w-0 space-y-0.5"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-stone-900 dark:text-stone-100 truncate">
                          {proj.name}
                        </span>
                        {isActive && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-stone-950">
                            فعال
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-stone-500 dark:text-stone-400">
                        {proj.clientOrTeam ? `تیم/کارفرما: ${proj.clientOrTeam}` : 'بدون نام کارفرما'}{' '}
                        • ایجاد: {new Date(proj.createdAt).toLocaleDateString('fa-IR')}
                      </p>
                    </div>
                  )}
                </div>

                {/* Controls */}
                {!isEditing && (
                  <div className="flex items-center gap-1.5 self-end sm:self-center shrink-0">
                    <button
                      onClick={() => onSelectProject(proj.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                        isActive
                          ? 'bg-amber-500 text-stone-950'
                          : 'bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700'
                      }`}
                    >
                      {isActive ? 'پروژه فعال' : 'انتخاب پروژه'}
                    </button>
                    <button
                      onClick={() => handleStartEdit(proj)}
                      className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-800"
                      title="ویرایش نام پروژه"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    {projects.length > 1 && (
                      <button
                        onClick={() => onDeleteProject(proj.id)}
                        className="p-1.5 rounded-lg text-stone-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40"
                        title="حذف پروژه"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
