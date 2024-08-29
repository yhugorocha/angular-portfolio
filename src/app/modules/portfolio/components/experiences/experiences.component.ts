import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/IExperience.interface';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperience[]>([
    {
      summary:{
        strong: 'Desenvolvedor Junior',
        p: 'Plano Consultoria Empresarial | Fev/2022 -  Jun/2024'
      },
      text: '<p> Atuação no levantamento de requisitos e desenvolvimento de serviços públicos na plataforma gov.br, utilizando a ferramenta Lecom BPM para automação de processos. E implementando funcionalidades com JavaScript e Java 8+ (incluindo criação de Servlets, consumo de APIs, operações com JDBC e integrações com o banco de dados SQL Server) com foco em desenvolvimento de soluções avançadas e eficientes.</p>'
    },
    {
      summary:{
        strong: 'Estagiário',
        p: 'Codevasf | Jan/2021 - Fev/2022'
      },
      text: '<p> Desenvolvimento de sistemas web para intranet corporativa utilizando PHP, com integração de frameworks e bibliotecas como Ext JS 4, Zend Framework e Doctrine, em conjunto com banco de dados SQL Server.</p>'
    }
  ])
}
