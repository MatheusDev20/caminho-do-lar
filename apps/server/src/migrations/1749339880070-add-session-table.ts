import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableIndex,
} from 'typeorm';

export class CreateSessionTable1749342000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // 1. Cria a tabela
    await queryRunner.createTable(
      new Table({
        name: 'session',
        columns: [
          {
            name: 'sid',
            type: 'varchar',
            isNullable: false,
            isPrimary: true, // PRIMARY KEY ("sid")
            collation: 'default', // mesmo COLLATE informado no SQL
          },
          {
            name: 'sess',
            type: 'json',
            isNullable: false,
          },
          {
            name: 'expire',
            type: 'timestamp',
            precision: 6,
            isNullable: false,
          },
        ],
        // OIDS = FALSE já é o padrão em versões recentes do Postgres,
        // portanto não precisa ser declarado.
      }),
      true, // ifNotExist
    );

    await queryRunner.createIndex(
      'session',
      new TableIndex({
        name: 'IDX_session_expire',
        columnNames: ['expire'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove primeiro o índice, depois a tabela
    await queryRunner.dropIndex('session', 'IDX_session_expire');
    await queryRunner.dropTable('session');
  }
}
