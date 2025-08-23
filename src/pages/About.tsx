import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Heart, 
  Users, 
  TrendingUp,
  Truck,
  MapPin,
  Shield,
  CheckCircle
} from 'lucide-react';
import usaMapImage from '@/assets/usa-logistics-map.jpg';
import warehouseImage from '@/assets/logistics-warehouse.jpg';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building reliable partnerships through transparent and honest business practices.'
    },
    {
      icon: TrendingUp,
      title: 'Speed',
      description: 'Delivering time-critical shipments with urgency and precision.'
    },
    {
      icon: Heart,
      title: 'Long-term Partnerships',
      description: 'Fostering lasting relationships with our clients and community.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Service',
      description: 'Exceeding expectations with professional and reliable logistics solutions.'
    }
  ];

  const milestones = [
    {
      year: '2025',
      title: 'Company Founded',
      description: 'Cincinnati Express LLC established by Jonibek Shermatov in Lebanon, Ohio.'
    },
    {
      year: '2025',
      title: 'Fleet Expansion',
      description: 'Planning to grow our fleet with modern trucks and refrigerated units.'
    },
    {
      year: '2025',
      title: 'GPS Integration',
      description: 'Implementing GPS tracking systems across all vehicles for real-time monitoring.'
    },
    {
      year: 'Future',
      title: 'Nationwide Growth',
      description: 'Expanding our trusted carrier network across the United States.'
    }
  ];

  return (
    <div className="min-h-screen pt-nav">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">Who We Are</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Cincinnati Express LLC is a newly established trucking logistics company based in Ohio, 
              founded in 2025 by Jonibek Shermatov with a vision to revolutionize freight transportation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To deliver reliable, transparent, and customer-first trucking services that exceed expectations. 
                We are committed to building trust through every mile we travel and every shipment we deliver.
              </p>
              
              <div className="bg-accent/30 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Our Story</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Starting as a small trucking operation, our goal is to expand into a trusted nationwide carrier. 
                  Founded by Jonibek Shermatov, Cincinnati Express LLC represents the American dream of building 
                  something meaningful from the ground up.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We plan to grow our fleet with modern trucks, refrigerated units, and GPS-equipped vehicles 
                  to serve customers better while maintaining our commitment to personal service and reliability.
                </p>
              </div>

              <Button asChild size="lg">
                <Link to="/contact">Work With Us</Link>
              </Button>
            </div>
            
            <div className="space-y-6">
              <img 
                src={warehouseImage} 
                alt="Logistics warehouse operations"
                className="w-full rounded-lg shadow-card"
              />
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">Founded by</h4>
                      <p className="text-muted-foreground">Jonibek Shermatov</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    An entrepreneur passionate about logistics and committed to building 
                    a company that prioritizes customer satisfaction and reliable service.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Cincinnati Express LLC
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-hero transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Nationwide Coverage</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                While we're based in Lebanon, Ohio, our vision extends across the entire United States. 
                We're actively expanding our service network to provide reliable trucking solutions 
                from coast to coast.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Ohio and surrounding states</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Major interstate corridors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Expanding nationwide network</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Strategic partner locations</span>
                </div>
              </div>
              
              <Button asChild variant="outline" size="lg">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
            
            <div>
              <img 
                src={usaMapImage} 
                alt="USA logistics coverage map"
                className="w-full rounded-lg shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From startup to trusted nationwide carrier - our growth story
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center font-bold text-sm">
                      {milestone.year}
                    </div>
                  </div>
                  <Card className="flex-1 p-6">
                    <CardContent className="p-0">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join the growing list of businesses that trust Cincinnati Express LLC for their logistics needs.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;