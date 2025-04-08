package Entities
import groovy.sql.Sql

class Conexao {
    def url = 'jdbc:postgresql://localhost:5432/linketinderdb'
    def user = 'postgres'
    def password = 'luiluisa10'

    def sql = Sql.newInstance(url, user, password, 'org.postgresql.Driver')

}


