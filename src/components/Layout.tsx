import { Heart } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';
import Menu from './Menu';

function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Menu />
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">
                Voice For Peace
              </h1>
            </Link>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;