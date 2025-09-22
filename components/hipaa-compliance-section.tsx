import { Shield, Lock, Eye, Server, CheckCircle } from "lucide-react"

export function HipaaComplianceSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            HIPAA Compliant Architecture
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enterprise-grade security that protects patient data and ensures regulatory compliance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">End-to-End Encryption</h3>
            <p className="text-sm text-gray-600">All data encrypted in transit and at rest</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Lock className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Access Controls</h3>
            <p className="text-sm text-gray-600">Role-based permissions and audit trails</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Eye className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Privacy by Design</h3>
            <p className="text-sm text-gray-600">Built-in data minimization and anonymization</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Server className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Secure Infrastructure</h3>
            <p className="text-sm text-gray-600">AWS-hosted with compliance certifications</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
            <span className="text-2xl font-bold text-gray-900">HIPAA Compliant</span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our architecture meets all HIPAA requirements for handling protected health information (PHI), giving you
            and your patients complete peace of mind.
          </p>
        </div>
      </div>
    </section>
  )
}
