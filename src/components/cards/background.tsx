import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Background() {

  return (
    <Card className="about-card">
      <CardHeader>
        <CardTitle>Background</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <p>Growing up in Brasília, the modernist architectural capital of Brazil, my home was a fusion of creativity and analytical thinking, influenced by my father's career as a photographer and my mother's profession as a lawyer. This unique blend has deeply shaped my perspective.</p>
        <p>My fascination with technology began at age four, sparked by our trusty beige computer. Although I pursued a degree in Computer Science, my true passion lies in the transformative power of great design craft, mainly inspired by the design craftsmanship behind Apple products.</p>
        <p>My curiosity led me to wonder: could I also create something that can evoke this effect on people?</p>
        <p>Today, I apply my multidisciplinary design skills, aiming to create solutions that make people feel and remember, elevating everyday experiences into inspiring solutions.</p>
      </CardContent>
    </Card>
  )
}