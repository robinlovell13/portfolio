import Image from 'next/image';

interface ProjectSkillProps {
  skill: string;
  key: number;
  image?: string;
}

const ProjectSkill: React.FC<ProjectSkillProps> = ({ skill, key, image }) => {

  return (
    <div className="border-1 border-white inline-flex items-center bg-transparent rounded-lg cursor-pointer">
      {image ? (
        <div className="w-24 h-6 relative">
          <Image className="rounded-sm" src={image} alt={skill} layout="fill" objectFit="cover" />
        </div>
      ) : (
        <span className="text-xs font-semibold bg-green-500 px-2 py-1 rounded-sm">{skill}</span>
      )}
    </div>
  );
  
}

export default ProjectSkill