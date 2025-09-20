import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage, Input } from "@/components/ui";
import { Button } from "@/components/misc";
import { toast } from "sonner";
import { CheckIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { handleDirectionChange } from "@/localization";

export default function Newsletter_Form() {
  const { t: tForm, i18n } = useTranslation("forms");
  const { t: tHints } = useTranslation("hints");

  type FromSchema = z.infer<typeof formSchema>;
  const formSchema = useMemo(() => {
    return z.object({
      email: z.email(tForm("errors.email")),
    });
  }, [i18n.language]);

  const form = useForm<FromSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: FromSchema) {
    toast(tHints("good.newsletter", { email: values.email }), { icon: <CheckIcon className="size-5" /> });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="relative">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="font-medium">
              <FormControl>
                <Input className="h-12 py-1.5 ps-3.5 pe-30 dark:bg-transparent" placeholder={tForm("newsletter.fields.email.placeholder")} {...field} />
              </FormControl>
              <FormDescription className="text-white text-base">{tForm("newsletter.fields.email.description")}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className={cn("text-accent-foreground bg-accent font-bold absolute top-1.5", handleDirectionChange(i18n.dir(), "right-1.5", "left-1.5"))}>
          {tForm("newsletter.submit")}
        </Button>
      </form>
    </Form>
  );
}
