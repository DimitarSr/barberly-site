export default function Footer() {
    return (
      <footer className="bg-gray-100 py-6 px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Barberly. Всички права запазени.
        </div>
      </footer>
    );
  }
  