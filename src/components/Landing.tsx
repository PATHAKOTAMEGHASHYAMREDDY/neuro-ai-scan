import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Zap, BarChart3, Search, CheckCircle, ArrowRight, Activity, Shield, Clock } from 'lucide-react';
import brainMriImage from '../assets/brain-mri.webp';
import aiMedicalImage from '../assets/ai-medical.jpg';
import aiBrainImage from '../assets/ai-brain.webp';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="medical-navbar">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 animate-slideInFromLeft">
            <div className="text-3xl animate-medicalPulse">🧠</div>
            <span className="text-2xl font-bold text-primary">BrainScan AI</span>
          </div>
          <div className="flex items-center gap-4 animate-slideInFromRight">
            <button 
              className="medical-button-secondary"
              onClick={() => navigate('/login')}
            >
              Log In
            </button>
            <button 
              className="medical-button-primary"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient hero-glow min-h-screen flex items-center">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-slideInFromLeft">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Revolutionary
                <span className="block bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
                  Brain MRI Analysis
                </span>
              </h1>
              <p className="text-xl lg:text-2xl opacity-90 font-light">
                Powered by Advanced AI Technology
              </p>
              <div className="space-y-6">
                <p className="text-lg opacity-80">
                  Detecting Parkinson's and Alzheimer's Disease with ResNet50 + SE Model
                </p>
                <button 
                  className="medical-button-primary group text-lg px-8 py-4"
                  onClick={() => navigate('/signup')}
                >
                  Start Analysis Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            <div className="flex justify-center animate-slideInFromRight">
              <div className="relative">
                <img 
                  src={brainMriImage} 
                  alt="Brain MRI Scan" 
                  className="max-w-full h-auto rounded-2xl shadow-large animate-float border-2 border-accent"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disease Info Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-foreground mb-4">Early Detection Saves Lives</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered analysis provides unprecedented accuracy in neurological disease detection
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="medical-card p-8 animate-scaleIn">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-primary">Alzheimer's Disease (AD)</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span>Early detection rate increased by 94%</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span>Advanced pattern recognition</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span>Volumetric brain analysis</span>
                </li>
              </ul>
            </div>
            
            <div className="medical-card p-8 animate-scaleIn" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3 mb-6">
                <Activity className="w-8 h-8 text-secondary" />
                <h3 className="text-2xl font-bold text-secondary">Parkinson's Disease (PD)</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span>Precise neural degradation tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span>Movement disorder analysis</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span>Structural change detection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Technology</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art deep learning architecture optimized for medical imaging
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="medical-card p-8 flex flex-col lg:flex-row items-center gap-8 animate-slideInFromLeft">
              <img 
                src={aiMedicalImage} 
                alt="AI Medical Analysis" 
                className="w-64 h-64 object-cover rounded-xl border-2 border-primary/20"
              />
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">ResNet50 + SE Architecture</h3>
                <p className="text-muted-foreground leading-relaxed">
                  State-of-the-art deep learning model optimized for medical imaging with 
                  Squeeze-and-Excitation blocks for enhanced feature extraction and accuracy.
                </p>
                <div className="flex items-center gap-2 text-success">
                  <Shield className="w-5 h-5" />
                  <span className="font-semibold">95%+ Accuracy Rate</span>
                </div>
              </div>
            </div>
            
            <div className="medical-card p-8 flex flex-col lg:flex-row items-center gap-8 animate-slideInFromRight">
              <img 
                src={aiBrainImage} 
                alt="AI Brain Analysis" 
                className="w-64 h-64 object-cover rounded-xl border-2 border-secondary/20"
              />
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-secondary">Neural Network Processing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Advanced neural network processing with multi-layer analysis for accurate 
                  disease detection and comprehensive brain structure evaluation.
                </p>
                <div className="flex items-center gap-2 text-success">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">Results in Minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-foreground mb-4">Advanced Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI-powered analysis with professional-grade accuracy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Brain, title: "Neural Analysis", desc: "Deep learning algorithms analyze brain structure patterns", delay: "0s" },
              { icon: Zap, title: "Instant Results", desc: "Get analysis results within minutes", delay: "0.1s" },
              { icon: BarChart3, title: "Detailed Reports", desc: "Comprehensive medical reports with visualizations", delay: "0.2s" },
              { icon: Search, title: "High Accuracy", desc: "95%+ accuracy in disease detection", delay: "0.3s" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="medical-card p-6 text-center animate-scaleIn"
                style={{ animationDelay: feature.delay }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-primary stats-glow text-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "95%+", label: "Accuracy Rate" },
              { number: "10,000+", label: "Scans Analyzed" },
              { number: "24/7", label: "Analysis Available" }
            ].map((stat, index) => (
              <div key={index} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-5xl font-bold mb-2 text-accent">{stat.number}</div>
                <div className="text-xl opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background text-center">
        <div className="container mx-auto px-6 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-foreground mb-6">Start Your Analysis Today</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join healthcare professionals worldwide in using advanced AI for neurological disease detection
          </p>
          <button 
            className="medical-button-primary group text-xl px-10 py-5"
            onClick={() => navigate('/signup')}
          >
            Get Started Now
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="text-2xl">🧠</div>
                <h3 className="text-2xl font-bold">BrainScan AI</h3>
              </div>
              <p className="opacity-80">Advanced Neural Disease Detection Platform</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact</h4>
              <div className="space-y-2 opacity-80">
                <p>Email: info@brainscan.ai</p>
                <p>Support: 24/7 Available</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Legal</h4>
              <div className="space-y-2 opacity-80">
                <p className="hover:text-accent cursor-pointer transition-colors">Privacy Policy</p>
                <p className="hover:text-accent cursor-pointer transition-colors">Terms of Service</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="opacity-80">© 2024 BrainScan AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;