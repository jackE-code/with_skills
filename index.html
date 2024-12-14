import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { 
  GitBranchIcon, 
  CheckCircle2, 
  ServerIcon, 
  GithubIcon 
} from 'lucide-react';

const DevOpsSection = () => {
  const [repos, setRepos] = useState([]);
  const [cicdPipelines, setCicdPipelines] = useState([]);

  useEffect(() => {
    // Fetch GitHub repositories and CI/CD pipelines
    const fetchRepos = async () => {
      try {
        // Replace with your actual GitHub username
        const response = await fetch('https://api.github.com/users/yourusername/repos');
        const data = await response.json();
        setRepos(data.slice(0, 5)); // Limit to 5 repos
      } catch (error) {
        console.error('Error fetching repositories', error);
      }
    };

    const mockCicdPipelines = [
      {
        name: 'Web App Deployment',
        status: 'Passed',
        stages: ['Build', 'Test', 'Deploy'],
        platform: 'CircleCI'
      },
      {
        name: 'Backend Service',
        status: 'In Progress',
        stages: ['Lint', 'Build', 'Integration Tests'],
        platform: 'GitHub Actions'
      }
    ];

    fetchRepos();
    setCicdPipelines(mockCicdPipelines);
  }, []);

  return (
    <div className="p-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">
        DevOps & Projects Showcase
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* GitHub Repositories */}
        <Card className="bg-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center">
              <GithubIcon className="mr-2" /> 
              My Repositories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Carousel>
              <CarouselContent>
                {repos.map((repo) => (
                  <CarouselItem key={repo.id}>
                    <div className="p-4 border rounded">
                      <h3 className="font-semibold">{repo.name}</h3>
                      <p className="text-sm text-gray-400">
                        {repo.description || 'No description'}
                      </p>
                      <div className="mt-2">
                        <Badge variant="secondary">
                          {repo.language || 'Unknown'}
                        </Badge>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>

        {/* CI/CD Pipelines */}
        <Card className="bg-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center">
              <ServerIcon className="mr-2" /> 
              CI/CD Pipelines
            </CardTitle>
          </CardHeader>
          <CardContent>
            {cicdPipelines.map((pipeline) => (
              <div 
                key={pipeline.name} 
                className="mb-4 p-4 border rounded flex items-center justify-between"
              >
                <div>
                  <h3 className="font-semibold">{pipeline.name}</h3>
                  <div className="flex items-center mt-2">
                    {pipeline.status === 'Passed' ? (
                      <CheckCircle2 className="text-green-500 mr-2" />
                    ) : (
                      <GitBranchIcon className="text-yellow-500 mr-2" />
                    )}
                    <span>{pipeline.status}</span>
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    Platform: {pipeline.platform}
                  </div>
                </div>
                <div className="flex space-x-2">
                  {pipeline.stages.map((stage) => (
                    <Badge key={stage} variant="outline">
                      {stage}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DevOpsSection;