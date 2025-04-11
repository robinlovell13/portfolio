import Image from "next/image";

interface ProjectSkillProps {
  skill: string;
  key: number;
  image?: string;
}

const ProjectSkill: React.FC<ProjectSkillProps> = ({ skill, image }) => {

  return (
    <div className="border-1 border-white inline-flex items-center rounded-sm text-black">
      {image ? (
        <div className="w-24 h-8 relative bg-white rounded-sm ">
          <Image
            className="rounded-sm"
            src={image}
            alt={skill}
            title={skill}
            fill
            sizes="100vw"
            style={{
              objectFit: "contain",
            }} />
        </div>
      ) : (
        <span className="text-xs font-semibold h-8 bg-white px-2 flex items-center rounded-sm" title={skill}>{skill}</span>
      )}
    </div>
  );
  
}

export default ProjectSkill