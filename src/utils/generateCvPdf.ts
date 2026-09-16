import { jsPDF } from 'jspdf';
import { 
  PERSONAL_INFO, 
  WORK_EXPERIENCE, 
  EDUCATION, 
  CERTIFICATIONS, 
  SKILL_CATEGORIES, 
  PROJECTS_DATA 
} from '../data/portfolioData';

export function generateCvPdf() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;
  let y = 18;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = 18;
    }
  };

  // 1. Header: Name & Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(24, 24, 27); // zinc-900
  doc.text(PERSONAL_INFO.name, margin, y);
  y += 7;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(180, 83, 9); // amber-700
  doc.text(PERSONAL_INFO.title, margin, y);
  y += 6;

  // Contact Info Line
  doc.setFontSize(8.5);
  doc.setTextColor(82, 82, 91); // zinc-600
  const contactText = `${PERSONAL_INFO.phone}  |  ${PERSONAL_INFO.email}  |  ${PERSONAL_INFO.location}`;
  doc.text(contactText, margin, y);
  y += 4.5;

  const linksText = `LinkedIn: ${PERSONAL_INFO.linkedin}  |  GitHub: ${PERSONAL_INFO.githubUrl}`;
  doc.text(linksText, margin, y);
  y += 7;

  // Divider
  doc.setDrawColor(212, 212, 216);
  doc.setLineWidth(0.4);
  doc.line(margin, y, pageWidth - margin, y);
  y += 6;

  // Section Header Helper
  const addSectionHeader = (title: string) => {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(24, 24, 27);
    doc.text(title.toUpperCase(), margin, y);
    y += 2;
    doc.setDrawColor(217, 119, 6); // amber-600
    doc.setLineWidth(0.6);
    doc.line(margin, y, margin + 40, y);
    y += 5;
  };

  // Helper for bullet points
  const addBulletPoint = (text: string, indent = margin + 4) => {
    const textWidth = pageWidth - margin - indent;
    const lines = doc.splitTextToSize(text, textWidth);
    checkPageBreak(lines.length * 4.5 + 2);

    // Bullet dot
    doc.setFillColor(180, 83, 9);
    doc.circle(indent - 2.5, y - 1.2, 0.7, 'F');

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(55, 65, 81);
    doc.text(lines, indent, y);
    y += lines.length * 4.5;
  };

  // 2. PROFILE
  addSectionHeader('Profile');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(55, 65, 81);
  const profileLines = doc.splitTextToSize(PERSONAL_INFO.shortBio, contentWidth);
  doc.text(profileLines, margin, y);
  y += profileLines.length * 4.5 + 4;

  // 3. EDUCATION
  addSectionHeader('Education');
  const edu = EDUCATION[0];
  if (edu) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(24, 24, 27);
    doc.text(edu.degree, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(113, 113, 122);
    const periodText = `${edu.period}`;
    doc.text(periodText, pageWidth - margin - doc.getTextWidth(periodText), y);
    y += 4.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(75, 85, 99);
    doc.text(`${edu.institution} | ${edu.location}`, margin, y);
    y += 4.5;

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(180, 83, 9);
    doc.text(edu.grade, margin, y);
    y += 5;

    // FYP
    if (edu.finalProject) {
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(24, 24, 27);
      doc.text(`Final Year Project: ${edu.finalProject.title}`, margin, y);
      y += 4.5;
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(180, 83, 9);
      doc.text(`Live Demo: ${edu.finalProject.liveUrl}`, margin, y);
      y += 4.5;

      edu.finalProject.highlights.forEach((h) => {
        addBulletPoint(h);
      });
      y += 2;
    }
  }

  // Certifications
  CERTIFICATIONS.forEach((cert) => {
    checkPageBreak(8);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(24, 24, 27);
    doc.text(cert.title, margin, y);
    y += 4;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(82, 82, 91);
    doc.text(`${cert.issuer} | Score: ${cert.score}`, margin, y);
    y += 4.5;
  });
  y += 2;

  // 4. WORK EXPERIENCE
  addSectionHeader('Work Experience');
  WORK_EXPERIENCE.forEach((exp) => {
    checkPageBreak(22);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(24, 24, 27);
    doc.text(exp.role, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(113, 113, 122);
    doc.text(exp.period, pageWidth - margin - doc.getTextWidth(exp.period), y);
    y += 4.5;

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(75, 85, 99);
    doc.text(`${exp.company} | ${exp.location}`, margin, y);
    y += 5;

    exp.achievements.forEach((r) => {
      addBulletPoint(r);
    });

    if (exp.highlightProjects && exp.highlightProjects.length > 0) {
      checkPageBreak(6);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(180, 83, 9);
      doc.text(`Featured Platforms: ${exp.highlightProjects.join(', ')}`, margin + 4, y);
      y += 5;
    }
    y += 2;
  });

  // 5. SELECTED PROJECTS & LIVE PLATFORMS
  addSectionHeader('Projects & Live Platforms');
  PROJECTS_DATA.slice(0, 8).forEach((proj) => {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(24, 24, 27);
    doc.text(proj.title, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(113, 113, 122);
    doc.text(proj.dateRange, pageWidth - margin - doc.getTextWidth(proj.dateRange), y);
    y += 4;

    if (proj.liveUrl) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(180, 83, 9);
      doc.text(`Website: ${proj.liveUrl}`, margin, y);
      y += 4;
    }

    addBulletPoint(proj.description, margin + 4);
    y += 2;
  });

  // 6. SKILLS
  addSectionHeader('Skills');
  SKILL_CATEGORIES.forEach((cat) => {
    checkPageBreak(8);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(24, 24, 27);
    doc.text(`${cat.title}: `, margin, y);
    const catWidth = doc.getTextWidth(`${cat.title}: `);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(75, 85, 99);
    const skillNames = cat.skills.map((s) => s.name).join(', ');
    const lines = doc.splitTextToSize(skillNames, contentWidth - catWidth);
    doc.text(lines, margin + catWidth, y);
    y += lines.length * 4.5 + 2;
  });

  // 7. LANGUAGES
  checkPageBreak(12);
  addSectionHeader('Languages');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(24, 24, 27);
  doc.text('Urdu: ', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(75, 85, 99);
  doc.text('Native', margin + 14, y);
  y += 4.5;

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(24, 24, 27);
  doc.text('English: ', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(75, 85, 99);
  doc.text('Proficient', margin + 17, y);

  // Save the PDF
  doc.save('Huzaifa_Bilal_Software_Engineer_CV.pdf');
}
