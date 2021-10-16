const getUserData = ({ special }) => {
  const result = [];
  special.forEach(({
    id, name, icon, description = 'Описание недоступно',
  }) => {
    const attack = {
      id,
      name,
      icon,
      description,
    };
    result.push(attack);
  });

  return result;
};

export default getUserData;
