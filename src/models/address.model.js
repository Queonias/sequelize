// module.exports = (sequelize, DataTypes) => {
//     const Address = sequelize.define
// }
'use strict';

module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define('Address', {
        id: { type: DataTypes.STRING, primaryKey: true, autoIncrement: true },
        city: DataTypes.STRING,
        street: DataTypes.STRING,
        number: DataTypes.INTEGER,
        employeeId: { type: DataTypes.INTEGER, foreignKey: true },
        // A declaração da Foreign Key é opcional no model
    },
    {
        timestamps: false, //Essa opção desativa o uso de timestamps (marcas de tempo) para o modelo.
        tableName: 'addresses', //Essa opção define o nome da tabela para "addresses"
        underscored: true, // Essa opção faz com que o nome das colunas da tabela sejam escritos com o formato "snake_case
    });

    // Aqui, uma função é atribuída à propriedade associate do modelo de endereço. Essa função é usada para definir relacionamentos entre modelos.

    Address.associate = (models) => { 
        Address.belongsTo(models.Employee, // Aqui, o método belongsTo é chamado para definir que um endereço pertence a um funcionário.
            { foreignKey: 'employeeId', as: 'employee'});
    };

  return Address;
};
