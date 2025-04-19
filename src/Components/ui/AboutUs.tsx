import { GlareCard } from "./glare-card";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "malek Boubaker",
      role: "2nd year student",
      imageUrl: "/images/malek.jpg",
      description: ""
    },
    {
      name: "Ahmed Boussetta",
      role: "2nd year student",
      imageUrl: "/images/ahmed.jpg",
      description: ""
    },
    {
        name: "Fakhri Eddine Mahfoudh",
        role: "2nd year student",
        imageUrl: "/images/fakhri.jpg",
        description: ""
      },
    // Add more team members as needed
  ];

  return (
    <div className=" flex pr-55 items-center justify-center  p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-70 max-w-4xl w-full">
        {teamMembers.map((member, index) => (
          <GlareCard key={index} className="p-4">
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="rounded-full w-40 h-40 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-lg text-gray-300">{member.role}</p>
              <p className="text-gray-200 mt-2">{member.description}</p>
            </div>
          </GlareCard>
        ))}
      </div>
    </div>
  );
};
export default AboutUs;
