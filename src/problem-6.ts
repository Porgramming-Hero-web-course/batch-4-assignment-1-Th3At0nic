{
  //Problem 6:
  // Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.
  // Sample Input :
  // const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  // console.log(updateProfile(myProfile, { age: 26 }));
  // Sample Output:
  // {
  //   name: "Alice",
  //   age: 26,
  //   email: "alice@example.com"
  // }
  //
  //
  //solution:

  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  const updateProfile = (
    profile: Profile,
    update: Partial<Profile>
  ): Profile => {
    const newProfile: Profile = { ...profile, ...update };
    return newProfile;
  };

  const person1: Profile = {
    name: "rahat",
    age: 4444,
    email: "rahat@gmail.com",
  };
  const updatPerson: Partial<Profile> = {
    name: "matin",
    age: 55,
    // email: "matin@gmail.com",
  };

  console.log(updateProfile(person1, updatPerson));
  //
}
