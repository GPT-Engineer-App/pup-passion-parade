import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dog, Heart, Home } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-blue-600">Pawsome Dogs</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-semibold mb-4">Welcome to the World of Dogs</h2>
          <p className="text-xl text-gray-700 mb-8">Discover the joy, love, and companionship that dogs bring to our lives.</p>
          <img src="https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Happy dogs" className="mx-auto object-cover rounded-lg shadow-lg w-full max-w-3xl h-[400px]" />
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Why Dogs are Amazing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Dog className="mr-2 h-6 w-6 text-blue-500" />
                  Loyal Companions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Dogs are known for their unwavering loyalty and devotion to their human families.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="mr-2 h-6 w-6 text-red-500" />
                  Emotional Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Dogs provide comfort and emotional support, reducing stress and anxiety in their owners.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Home className="mr-2 h-6 w-6 text-green-500" />
                  Family Members
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Dogs quickly become integral parts of our families, bringing joy and laughter to our homes.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Welcome a Dog into Your Life?</h3>
          <p className="text-lg text-gray-700 mb-6">Explore adoption options and find your perfect furry friend today!</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Find a Dog to Adopt
          </Button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Pawsome Dogs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
