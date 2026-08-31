import React, { useEffect, useState } from 'react';
import type { AdminUser } from '../../types';
import { getCurrentAdmin, signOut } from '../../services/adminAuth';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { LoadingState } from '../../components/admin/AdminUI';
import { AdminLoginPage } from './AdminLoginPage';
import { AdminDashboardPage } from './AdminDashboardPage';
import { AdminJobsPage } from './AdminJobsPage';
import { AdminJobFormPage } from './AdminJobFormPage';
import { AdminApplicantsPage } from './AdminApplicantsPage';
import { AdminApplicantDetailPage } from './AdminApplicantDetailPage';
import { AdminStaffRequestsPage } from './AdminStaffRequestsPage';
import { AdminStaffRequestDetailPage } from './AdminStaffRequestDetailPage';
import { AdminMessagesPage } from './AdminMessagesPage';
import { AdminSettingsPage } from './AdminSettingsPage';

export function AdminApp() {
  const [path, setPath] = useState(window.location.pathname.replace(/\/$/, '') || '/');
  const [user, setUser] = useState<AdminUser | null | undefined>();
  useEffect(() => {
    getCurrentAdmin().then(setUser);
    const onPopState = () => setPath(window.location.pathname.replace(/\/$/, '') || '/');
    addEventListener('popstate', onPopState);
    return () => removeEventListener('popstate', onPopState);
  }, []);
  function navigate(next: string) { history.pushState({}, '', next); setPath(next); scrollTo({ top: 0 }); }
  if (user === undefined) return <div className="p-8"><LoadingState /></div>;
  if (!user) {
    if (path !== '/admin/login') history.replaceState({}, '', '/admin/login');
    return <AdminLoginPage onSuccess={admin => { setUser(admin); navigate('/admin'); }} />;
  }
  let content: React.ReactNode;
  if (path === '/admin' || path === '/admin/login') content = <AdminDashboardPage onNavigate={navigate} />;
  else if (path === '/admin/jobs') content = <AdminJobsPage onNavigate={navigate} />;
  else if (path === '/admin/jobs/new') content = <AdminJobFormPage onNavigate={navigate} />;
  else if (/^\/admin\/jobs\/[^/]+$/.test(path)) content = <AdminJobFormPage id={path.split('/').pop()} onNavigate={navigate} />;
  else if (path === '/admin/applicants') content = <AdminApplicantsPage onNavigate={navigate} />;
  else if (/^\/admin\/applicants\/[^/]+$/.test(path)) content = <AdminApplicantDetailPage id={path.split('/').pop()!} onNavigate={navigate} />;
  else if (path === '/admin/staff-requests') content = <AdminStaffRequestsPage onNavigate={navigate} />;
  else if (/^\/admin\/staff-requests\/[^/]+$/.test(path)) content = <AdminStaffRequestDetailPage id={path.split('/').pop()!} onNavigate={navigate} />;
  else if (path === '/admin/messages') content = <AdminMessagesPage />;
  else if (path === '/admin/settings') content = <AdminSettingsPage user={user} />;
  else content = <div className="rounded-xl bg-white p-8"><h1 className="text-xl font-bold">Admin page not found</h1><button className="mt-3 text-[#2463A7]" onClick={() => navigate('/admin')}>Return to dashboard</button></div>;
  return <AdminLayout path={path === '/admin/login' ? '/admin' : path} user={user} onNavigate={navigate} onSignOut={async () => { await signOut(); setUser(null); navigate('/admin/login'); }}>{content}</AdminLayout>;
}
