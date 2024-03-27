import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Experience() {

  const experienceData = [
    {
      id: 1,
      year: "2019-2020",
      name: "Sofia Davis",
      email: "",
    },
    {
      id: 2,
      year: "2019-2020",
      name: "Sofia Davis",
      email: "",
    },
    {
      id: 3,
      year: "2019-2020",
      name: "Sofia Davis",
      email: "",
    },
  ]
  return (
    <Card className="about-card">
      <CardHeader>
        <CardTitle>Experience</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex justify-between flex-col">
          {experienceData.map((data) => (

            <div className="flex items-center space-x-10 mb-5" key={data.id}>
              <div>
                <span>{data.year}</span>
              </div>
              <div>
                <p className="text-sm font-medium leading-none">{data.name}</p>
                <p className="text-sm text-muted-foreground">m@example.com</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}