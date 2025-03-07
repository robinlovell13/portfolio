import Image from 'next/image';

interface ProjectSkillProps {
  skill: string;
  key: number;
  image?: string;
}

const ProjectSkill: React.FC<ProjectSkillProps> = ({ skill, key, image }) => {

  return (
    <div className="border-1 border-white inline-flex items-center rounded-sm text-black">
      {image ? (
        <div className="w-24 h-6 relative bg-white rounded-sm">
          <Image className="rounded-sm" src={image} alt={skill} layout="fill" objectFit="cover"/>
        </div>
      ) : (
        <span className="text-xs font-semibold h-6 bg-white px-2 py-1 rounded-sm">{skill}</span>
      )}
    </div>
  );
  
}

export default ProjectSkill